import React from 'react'
import { useStateContext } from '../../context/context'

const Footer = () => {
    const{t}=useStateContext()
  return (
      <div className="h-full Roboto-light text-sm text-gray-400 flex flex-col gap-2 justify-end">
        <div className="flex gap-1 justify-between">
          <span>{t("aboutus")}</span>
          <span>{t("services")}</span>
          <span>{t("contact")}</span>
        </div>
        <div>
          <span>@jobsearch 2023-2024</span>
        </div>
        <div className=" h-[1px] bg-gray-400"></div>
        <div>
          <span>{t("siteby")} wintercodeNKJJ</span>
        </div>
      </div>
  )
}

export default Footer
