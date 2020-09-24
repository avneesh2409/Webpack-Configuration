import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from "../../css/style.module.css";

const HOST = "https://api.covid19india.org";
const Coviddata = (props) => {
    const [state, setState] = useState({ covidData: {}, covidDataKeys: [] });
    const [selectState, setSelectState] = useState({ option: 'none', isDistrictOpen: false })
    const [selectDistrict, setSelectDistrict] = useState({ option: 'none', isActualOpen: false })
    const isEmpty = (obj) => {
        return (Object.keys(obj).length > 0) ? false : true;
    }
    isEmpty.prototype = {
        obj: PropTypes.object
    }
    useEffect(() => {
        let url = "state_district_wise.json";
        fetch(`${HOST}/${url}`)
            .then(res => res.json())
            .then(json => {
                if (!isEmpty(json)) {
                    setState({
                        ...state,
                        covidData: json,
                        covidDataKeys: Object.keys(json)
                    })
                }
            })
            .catch(err => console.log(err))
    }, [])
    const covidDataKeyChangeHandler = (event) => {
        const data = state.covidData[`${event.target.value}`];
        setSelectState({
            ...selectState,
            option: event.target.value,
            isDistrictOpen: true,
            districtData: data.districtData,
            districtDataKey: Object.keys(data.districtData),
            statecode: data.statecode
        })
        setSelectDistrict({
            ...selectDistrict,
            actualData:null
        })
    }
    const districtChangeHandler = (event) => {
        setSelectDistrict({
            ...selectDistrict,
            option: event.target.value,
            isActualOpen: true,
            actualData: selectState.districtData[`${event.target.value}`]
        })
    }
    let { notes, deceased, confirmed, recovered, active } = selectDistrict.actualData || {notes:'',deceased:0,confirmed:0,recovered:0,active:0};
    return (
        <>
            <h2>Welcome to India's Covid Patient Statistics</h2>
            <select name="covidDataKey" value={selectState.option} onChange={covidDataKeyChangeHandler}>
                <option value='none'>Select State....</option>
                {
                    state.covidDataKeys && state.covidDataKeys.length > 0 &&
                    state.covidDataKeys.map((item, index) => {
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
                        selectState.districtDataKey.map((item, index) => {

                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            }
            <div>
                <table border='1' className={styles.covidTable}>
                    <thead>
                        <tr>
                            <th>Notes</th>
                            <th>Active</th>
                            <th>Confirmed</th>
                            <th>Deceased</th>
                            <th>Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectDistrict.actualData &&
                            <tr>
                                <td>{notes}</td>
                                <td style={{color:'red'}}>{active}</td>
                                <td style={{color:'blue'}}>{confirmed}</td>
                                <td style={{color:'yellow'}}>{deceased}</td>
                                <td style={{color:'green'}}>{recovered}</td>
                            </tr>
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Coviddata
