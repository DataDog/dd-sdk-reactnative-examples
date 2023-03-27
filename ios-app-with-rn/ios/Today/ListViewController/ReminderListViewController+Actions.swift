/*
 See LICENSE folder for this sample’s licensing information.
 */

import UIKit
import React

extension ReminderListViewController {
    @objc func didPressDoneButton(_ sender: ReminderDoneButton) {
        guard let id = sender.id else { return }
        completeReminder(withId: id)
        let reminder = reminder(withId: id)
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!

        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "RNApp",
            initialProperties: ["reminder": ["title": reminder.title]] as [NSObject : AnyObject],
            launchOptions: nil
        )
        let viewController = UIViewController()
        viewController.view = rootView
        navigationController?.pushViewController(viewController, animated: true)
    }

    @objc func didPressAddButton(_ sender: UIBarButtonItem) {
        let reminder = Reminder(title: "", dueDate: Date.now)
        let viewController = ReminderViewController(reminder: reminder) { [weak self] reminder in
            self?.addReminder(reminder)
            self?.updateSnapshot()
            self?.dismiss(animated: true)
        }
        viewController.isAddingNewReminder = true
        viewController.setEditing(true, animated: false)
        viewController.navigationItem.leftBarButtonItem = UIBarButtonItem(
            barButtonSystemItem: .cancel, target: self, action: #selector(didCancelAdd(_:)))
        viewController.navigationItem.title = NSLocalizedString(
            "Add Reminder", comment: "Add Reminder view controller title")
        let navigationController = UINavigationController(rootViewController: viewController)
        present(navigationController, animated: true)
    }

    @objc func didCancelAdd(_ sender: UIBarButtonItem) {
        dismiss(animated: true)
    }

    @objc func didChangeListStyle(_ sender: UISegmentedControl) {
        listStyle = ReminderListStyle(rawValue: sender.selectedSegmentIndex) ?? .today
        updateSnapshot()
        refreshBackground()
    }
}
