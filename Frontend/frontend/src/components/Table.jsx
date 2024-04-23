import React from 'react'
import { MdoutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from "react-icons/md"

const Table = () => {


  return (
    <div className='py-32'>
        <table className='w-11/12 max-w-4xl'>
            <thead className='border-b-2 border-black'>
                <tr>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Checkbox</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>To Do</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date Created</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='p-3 text-sm '>true</td>
                    <td className='p-3 text-sm '>Lorem ipsum dolor </td>
                    <td className='p-3 text-sm '>done</td>
                    <td className='p-3 text-sm '>24-04-2024</td>
                    <td className='p-3 text-sm '>Actions</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default Table;