import React from 'react'
import { Select } from "antd";
import icSearch from "../../assets/ic_search.svg"
import localPolice from "../../assets/local_police.svg"
import localFireDepartment from "../../assets/local_fire_department.svg"
import localFlorist from "../../assets/local_florist.svg"
import icBell from "../../assets/ic_bell.svg";
import property from "../../assets/property.svg";
import 'antd/dist/antd.css'
import './Header.scss'

const { Option } = Select;

const Header = () => {

    return (
        <>
            <div className="Header">
                <div className="header-search">
                    <Select className="header-select text" defaultValue="Explorar" style={{ width: 100 }}>
                        <Option value="Explorar">Explorar</Option>
                    </Select>
                    <img src={icSearch} />
                </div>
                <div className="header-statistics">
                    <span className="text" ><img src={localFireDepartment} /> 0</span>
                    <span><img src={localPolice} /> 0</span>
                    <span><img src={localFlorist} /> 0</span>
                </div>
                <div className="header-profile">
                    <img src={icBell} />
                    <img src={property} />
                </div>
            </div>
        </>
    )
}

export default Header