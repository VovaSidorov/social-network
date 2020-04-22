import React from "react";
import Loader from "../common/loader";


export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Loader />} >
            <Component {...props} />
        </React.Suspense>
    };
}