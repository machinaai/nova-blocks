import React from 'react'
import { Card } from 'antd';

import {  useIntl } from 'umi';

export default function Panel_Directions(props) {
    const{ dataSave} = props;
    const intl = useIntl();
    return (
        <div>
            <hr/>

            <Card>
<strong>{intl.formatMessage({id: "Google_Maps.title_origin"})}: </strong><h4>{dataSave?.origin_addresses[0]}</h4>
<hr/>
<strong>{intl.formatMessage({id: "Google_Maps.title_destination"})}: </strong><h4>{dataSave?.destination_addresses[0]}</h4>
<hr/>
<strong>{intl.formatMessage({id: "Google_Maps.title_distance"})}: </strong><h4>{dataSave?.rows[0].elements[0].distance.text}</h4>
<hr/>
<strong>{intl.formatMessage({id: "Google_Maps.title_time"})}: </strong><h4>{dataSave?.rows[0].elements[0].duration.text}</h4>
    
    </Card>
<hr/>
        </div>
    )
}
