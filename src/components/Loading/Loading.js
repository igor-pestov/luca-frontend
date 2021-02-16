import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import "./Loading.scss";
const Loading = () => {
    const antIcon =  <LoadingOutlined style={{fontSize:50}} spin />;

    return(
        <Spin className="loading" indicator={antIcon} />
    )
};

export default Loading;
