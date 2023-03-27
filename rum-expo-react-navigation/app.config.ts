import withRemoveiOSNotificationEntitlement from "./config-plugins/withRemoveiOSNotificationEntitlement";


type Dict = {[key: string]:any};
export default ({config}: Dict) => {
    return {
        ...config,
        plugins: [
            ...(config.plugins ?? []),
            [withRemoveiOSNotificationEntitlement]
        ]
    }
}
