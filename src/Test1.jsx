import React from 'react'
import {Formik, Form, Field ,ErrorMessage} from "formik"
import * as yup from 'yup'


const validationSchema =yup.object({ 
    NameOfPipeline:yup.string().required("Please enter the required field").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(5),
    NameOfProject: yup.string().required("Please enter the required field").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(5),
    NameOfBucket:yup.string().required("Please enter the required field").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(5),
    NameOfLocation:yup.string().required("Please enter the required field").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").min(5),
    Credentials:yup.string().required("Please enter the required field").min(5),
    RunTime:yup.string().required("Please enter the required field").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field").min(5),

})
function Test1  ()  {
  return (

    <div className='p-5 text-center '>

<Formik
validationSchema={validationSchema}
initialValues={{NameOfPipeline:"" ,NameOfProject:"",NameOfBucket:"",NameOfLocation:"",Credentials:"",RunTime:""}}
onSubmit={(values)=> {
  console.log(values);
}}

>
<Form>

      <label className='font-bold text-blue-500 text-2xl' >Select Your Source : </label><br />
<select  className='bg-gray-200 px-12 py-2'>
  <option >Google Cloud Storage</option>
</select><br /><br />

<label className='font-bold text-blue-500 text-2xl'>Provide a name for pipeline : </label><br />
<Field className='border-2 bg-gray-200 py-2 px-12 ' name="NameOfPipeline" placeholder='e.g., cust_shop_energy_gkateway001'></Field><br />
<ErrorMessage name="NameOfPipeline"></ErrorMessage><br />
<label className='font-bold text-blue-500 text-2xl'> GCS project name : </label><br />
<Field className='border-2 bg-gray-200 px-12 py-2 ' name="NameOfProject" placeholder=' project-id'></Field><br />
<ErrorMessage name="NameOfProject"></ErrorMessage><br /><br />
<label className='font-bold text-blue-500 text-2xl'> GCS bucket name :</label><br />
<Field className='border-2 bg-gray-200 px-12 py-2' name="NameOfBucket" placeholder=' gs://your-bucket'></Field><br />
<ErrorMessage name="NameOfBucket"></ErrorMessage><br /><br />
<label className='font-bold text-blue-500 text-2xl'>input Cloud Storage File(s) : </label><br />
<Field className='border-2  bg-gray-200 px-12 py-2' name="NameOfLocation" placeholder=' GCS location of your files'></Field><br />
<ErrorMessage name="NameOfLocation"></ErrorMessage><br /><br />
<label className='font-bold text-blue-500 text-2xl'> GCS Credentials : </label><br />
<Field className='border-2  bg-gray-300 px-12 py-2 'name="Credentials" type="number"></Field><br />
<ErrorMessage name="Credentials" ></ErrorMessage><br /><br />
<label className='font-bold text-blue-500 text-2xl'> Run Every : </label><br />
<Field className='border-2  bg-gray-200 px-12 py-2' name="RunTime" placeholder=' (in minutes)'></Field><br />
<ErrorMessage name="RunTime"></ErrorMessage><br /><br />

<button className='bg-blue-500  px-3 py-1' type='submit' >Create</button>
<button className='bg-blue-500  px-12 py-1 ml-5 '>Cancel</button>
</Form>
</Formik>
    </div>
  )
}

export default Test1;