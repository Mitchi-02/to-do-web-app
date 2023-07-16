"use client"

import { toast as t } from "react-toastify"

const toast = (type: "success"|"error", message:string) => {
    return t[type](message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      delay: 0,
      theme: 'dark',
      progress: undefined,
    })
}


export default toast