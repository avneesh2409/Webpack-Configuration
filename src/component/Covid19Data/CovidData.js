import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const HOST = "https://api.covid19india.org";
const Coviddata = (props) => {
    const [state,setState] = useState({covidData:{},covidDataKeys:[]});
    const [selectState,setSelectState] = useState({option:'none',isDistrictOpen:false})
    const [selectDistrict,setSelectDistrict] = useState({option:'none',isActualOpen:false})
    const isEmpty = (obj) =>{
            return (Object.keys(obj).length > 0)?false:true;
    }
    isEmpty.prototype = {
        obj:PropTypes.object
    }
    useEffect(()=>{
        let url = "state_district_wise.json";
        fetch(`${HOST}/${url}`)
        .then(res=>res.json())
        .then(json=>{
            if(!isEmpty(json)){
           
            //    console.log(Object.keys(districtData))
                
            // console.log()

                setState({
                    ...state,
                    covidData:json,
                    covidDataKeys:Object.keys(json)
                   // districtDataKeys:[]
                })
            }
      
        })
        .catch(err=>console.log(err))
    },[])
   const covidDataKeyChangeHandler = (event) =>{
       const data = state.covidData[`${event.target.value}`];
            setSelectState({
               ...selectState,
               option:event.target.value,
               isDistrictOpen:true,
               districtData:data.districtData,
               districtDataKey:Object.keys(data.districtData),
               statecode:data.statecode
            })
   }
   const districtChangeHandler = (event) =>{
            setSelectDistrict({
                ...selectDistrict,
                option:event.target.value,
                isActualOpen:true,
                actualData: selectState.districtData[`${event.target.value}`]
            })
   }
   console.log("actual data :-",selectDistrict.actualData)
    return (
        <>
            <h2>Welcom to India's Covid Patient Statistics</h2>
            <select name="covidDataKey" value={selectState.option} onChange={covidDataKeyChangeHandler}>
                <option value='none'>Select State....</option> 
                    {
                        state.covidDataKeys && state.covidDataKeys.length > 0 &&
                        state.covidDataKeys.map((item,index)=>{
                            return (
                            <option key={index} value={item}>{item}</option>
                            )
                        })
                    }
            </select>
            
            {
                selectState.isDistrictOpen && 
                <select value={selectDistrict.option} onChange={districtChangeHandler}>
                    <option value='none'>Select District</option>
                    {
                        selectState.districtDataKey.map((item,index)=>{
                            
                            return (
                            <option key={index} value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            }
        </>
    )
}


export default Coviddata
