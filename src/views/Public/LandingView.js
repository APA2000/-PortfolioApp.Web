import React from 'react'
import PropTypes from 'prop-types'
import { useViewModel } from '../../hooks/useViewModel'
import { useParams } from 'react-router'

export const LandingView = ({}) => {
    //const viewModel = useViewModel(LandingViewModel)

    const { slug } = useParams();

    return (
        <div>
            <h1>Hello {slug} from landing</h1>
        </div>
    )
}