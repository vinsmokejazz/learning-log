import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./store/atom/counter";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { use } from "react";

function App() {
    return <RecoilRoot>
        <MainApp />
    </RecoilRoot>
}

function MainApp() {
    const networkNotificatonCount = useRecoilValue(networkAtom)
    const jobsCount = useRecoilValue(jobsAtom)
    const notificationCount = useRecoilValue(notificationAtom)
    const [messageCount, setMessageCount] = useRecoilState(messageAtom);
    //whenever u want to update value use useRecoilState hook 
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);


    return (
        <>
            <button>Home</button>
            <button>My Network ({networkNotificatonCount >= 100 ? "99+" : networkNotificatonCount})</button>
            <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
            <button>Messaging ({messageCount >= 100 ? "99+" : messageCount})</button>
            <button>Notifications ({notificationAtom >= 100 ? "99+" : notificationCount})</button>


            <button onClick={() => {
                setMessageCount(c => c + 1)
            }}>Me ({totalNotificationCount >= 100 ? "99+" : totalNotificationCount})</button>

        </>
    )
}

export default App