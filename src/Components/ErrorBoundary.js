import React, {setState} from 'react'
import includes from "lodash/includes"
import { withFirebase } from "../Providers/Firebase"
import Notification from "../Components/Notifications"

function ErrorBoundary() {

    const [ state, setState] = setState()

    state = {
        hasError: false
    }

    const getDerivedStateFromError = error => {
        return { hasError: true}
    }

    componentDidCatch = async (error, errorInfo) => {
        const response = await props.firebase.saveError(error, errorInfo)
        if (includes(response, "Failed")) {
            console.log(response)
        }
    }

    return (
        <div className="notification">
            {state.hasError ? 
                <Notification type="error" title="Woops!" body="Ocurrió un error. Intente nuevamente" />
                : 
                props.children
            }
        </div>
    )
}

export default withFirebase(ErrorBoundary)
