import React, { useState } from 'react'


const Form = () => {

    const [form, setForm] = useState({
        nama: "",
        nim: "",
        angkatan: "",
        hobi: ""
    });

    const [submit, setSubmit] = useState(false);
    // const [records, setRecords] = useState([])
    
    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     console.log(name, value);

    //     setForm({...Form, [name] : value})
       
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // alert("oke")

        // const newRecords = { ...Form, id: new Date().getTime().toString()}
        // console.log(records);

        // setRecords([...records, newRecords]);
        // console.log(records);

        // setForm({ nama:"", nim:"", angkatan:"", hobi:""})
    }

    return (
        <div className='form'>
            { submit ? (
                <div className='form-result'>
                    <div className='result-details'>
                    <div className='title'>Form Biodata</div>
                        <div className='data'>
                            <div className='details-result'>Nama: {form.nama}</div>
                            <div className='details-result'>NIM: {form.nim}</div>
                            <div  className='details-result'>Angkatan: {form.angkatan}</div>
                            <div className='details-result'>Hobi: {form.hobi}</div>
                        </div>
                        <button className='btn' onClick={() => {setSubmit (false)}}>BACK</button>
                    </div>
                </div>
            ):
            (
                <div className='container'>
                    <div className='title'>Form Biodata</div>
                    <form action='' onSubmit={handleSubmit}>
                        <div className='form-details'>
                            <div className='input-box'>
                                <span className='details'>Nama</span>
                                <input type='text' name='nama' id='nama' autoComplete='off' placeholder='Masukkan Nama Anda' 
                                value={form.nama} 
                                onChange={(e) => { setForm({...form, nama: e.target.value});
                                }}/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>NIM</span>
                                <input type='text' name='nim' id='nim' autoComplete='off' placeholder='Masukkan NIM Anda'
                                value={form.nim} 
                                onChange={(e) => { setForm({...form, nim: e.target.value});
                                }}/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Angkatan</span>
                                <input type='text' name='angkatan' id='angkatan' autoComplete='off' placeholder='Masukkan Angkatan Anda'
                                value={form.angkatan} 
                                onChange={(e) => { setForm({...form, angkatan: e.target.value});
                                }}/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Hobi</span>
                                <input type='text' name='hobi' id='hobi' autoComplete='off' placeholder='Masukkan Hobi Anda' 
                                value={form.hobi} 
                                onChange={(e) => { setForm({...form, hobi: e.target.value});
                                }}/>
                            </div>
                        </div>
                        <button className='btn' type='submit' onClick={() => {setSubmit (true)}}>SUBMIT</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Form