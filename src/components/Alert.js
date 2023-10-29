import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
   return (
      props.alert &&
      <div className={`alert alert-${props.alert.type} fade show w-75 mx-auto`} role="alert">
         <strong>{props.alert.type}:</strong> {props.alert.message}
      </div>
   )
}



Alert.propTypes = {
   alert: PropTypes.object
}
