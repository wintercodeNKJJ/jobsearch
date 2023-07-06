import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context/context';
import { MdNotificationsActive } from 'react-icons/md';

const Notify = () => {
    const {type,message,time,render} = useStateContext()
    const [visible, setVisible] = useState(true);
    const [delay, setDelay] = useState(()=>{return time ? time : 5000})

    useEffect(() => {
        setVisible(true)
        setTimeout(() => {
            setVisible(false);
        }, delay);
    }, [render]);
    
    return (
        visible ? <div className=' bg-green-200 border rounded-lg h-full p-2 w-52'>
            <div className='flex px-2 gap-3 border-b border-blue-400 text-blue-400'>
                <MdNotificationsActive size={20}/>
                <div>{type}</div>
            </div>
            <div className='hover:text-blue-400 px-2'>
                <p>{message}</p>
            </div>
        </div> : <div/>
      )
}

export default Notify