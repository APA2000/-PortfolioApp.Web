
import React from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

/**
 * @param {Object} param
 * @param {boolean} param.full. If screen height should be full screen. Default true.
 * @returns
 */
export const LoadingScreen = ({full = true}) => {
    return (
        <div className={`flex ${full ? 'h-screen' : 'h-full'}`}>
            <div className="m-auto">
                <Loader
                    type="Rings"
                    color="#00BFFF"
                    height={300}
                    width={300}/>
            </div>
        </div>
    )
}
