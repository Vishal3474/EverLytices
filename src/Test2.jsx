import React from 'react'
import {newData} from "./mockdata/newData";


function Test2  ()  {

  let firstArr = newData[0]
  let secArr = newData[1]
  let thirdArr = newData[2]
    

  return (
    <div>
<div className="relative overflow-x-auto">
  <table className="w-full text-left text-sm text-black dark:text-gray-400">
    <thead className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">{firstArr[0]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[1]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[2]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[3]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[4]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[5]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[6]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[7]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[8]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[9]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[10]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[11]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[12]}</th>
        <th scope="col" className="py-3 px-6">{firstArr[13]}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800 ">
        
        <th scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white">{secArr[1]}
        </th>
        
        <td className="py-4 px-6">{secArr[1]}</td>
        <td className="py-4 px-6 ">{secArr[2]}</td>
        <td className="py-4 px-6">{secArr[3]}</td>
        <td className="py-4 px-6">{secArr[4]}</td>
        <td className="py-4 px-6">{secArr[5]}</td>
        <td className="py-4 px-6">{secArr[6]}</td>
        <td className="py-4 px-6">{secArr[7]}</td>
        <td className="py-4 px-6">{secArr[8]}</td>
        <td className="py-4 px-6">{secArr[9]}</td>
        <td className="py-4 px-6">{secArr[10]}</td>
        <td className="py-4 px-6">{secArr[11]}</td>
        <td className="py-4 px-6">{secArr[12]}</td>
        <td className="py-4 px-6">{secArr[13]}</td>
      </tr>
      <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
        <th scope="row" className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white">{thirdArr[0]}</th>
       
        <td className="py-4 px-6">{thirdArr[1]}</td>
        <td className="py-4 px-6">{thirdArr[2]}</td>
        <td className="py-4 px-6">{thirdArr[3]}</td>
        <td className="py-4 px-6">{thirdArr[4]}</td>
        <td className="py-4 px-6">{thirdArr[5]}</td>
        <td className="py-4 px-6">{thirdArr[6]}</td>
        <td className="py-4 px-6">{thirdArr[7]}</td>
        <td className="py-4 px-6">{thirdArr[8]}</td>
        <td className="py-4 px-6">{thirdArr[9]}</td>
        <td className="py-4 px-6">{thirdArr[10]}</td>
        <td className="py-4 px-6">{thirdArr[11]}</td>
        <td className="py-4 px-6">{thirdArr[12]}</td>
        <td className="py-4 px-6">{thirdArr[13]}</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Test2