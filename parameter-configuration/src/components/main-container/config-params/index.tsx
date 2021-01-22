import React, { useEffect, useState } from 'react';
import { useIntl } from 'umi';
import ConfigParamsBlock from '../../config-params-block/src/index';
import SliderBlock from '../../slider-block/src';
import ConectionsBlock from '../../connections-block/src';

interface Props {
    font?: {
        fontTitle: string
        fontContent: string
    }
}

export const ConfigParamsContainer: React.FC<Props> = ({font}) => {
    const intl = useIntl();

    const propsConnectionsBlock = {
        data: [
            {
                title: `${intl.formatMessage({ id: 'connection.title1' })}`,
                content: `${intl.formatMessage({ id: 'connection.content1' })}`,
                radioOptions: {
                    val1: `${intl.formatMessage({ id: 'radioOp1' })}`,
                    val2: `${intl.formatMessage({ id: 'radioOp2' })}`
                }
            },
            {
                title: `${intl.formatMessage({ id: 'connection.title2' })}`,
                content: `${intl.formatMessage({ id: 'connection.content2' })}`,
                radioOptions: {
                    val1: `${intl.formatMessage({ id: 'radioOp1' })}`,
                    val2: `${intl.formatMessage({ id: 'radioOp2' })}`
                }
            }
        ],
        fontFam:font
    }

    const propsConfigParams = {
        data: {
            options: [
                {
                    title: `${intl.formatMessage({ id: 'config.params.title1' })}`,
                    cont1: {
                        title: `${intl.formatMessage({ id: 'config.op1.title1' })}`,
                        content: `${intl.formatMessage({ id: 'config.op1.content1' })}`,
                        sliderCont: <SliderBlock />
                    },
                    cont2: {
                        title: `${intl.formatMessage({ id: 'config.op1.title2' })}`,
                        content: `${intl.formatMessage({ id: 'config.op1.content2' })}`,
                        sliderCont: <SliderBlock />
                    }
                },
                {
                    title: `${intl.formatMessage({ id: 'config.params.title2' })}`,
                    cont1: {
                        title: `${intl.formatMessage({ id: 'config.op2.title1' })}`,
                        content: `${intl.formatMessage({ id: 'config.op2.content1' })}`,
                        sliderCont: <SliderBlock />
                    },
                    cont2: {
                        title: `${intl.formatMessage({ id: 'config.op2.title2' })}`,
                        content: `${intl.formatMessage({ id: 'config.op2.content2' })}`,
                        sliderCont: <SliderBlock />
                    }
                },
            ],
            option3: {
                title: `${intl.formatMessage({ id: 'config.params.title3' })}`,
                cont: <ConectionsBlock {...propsConnectionsBlock} />
            },
            option4: {
                title: `${intl.formatMessage({ id: 'config.params.title4' })}`,
                cont: {
                    title: `${intl.formatMessage({ id: 'config.op4.title' })}`,
                    content: `${intl.formatMessage({ id: 'config.op4.content' })}`,
                    sliderCont: <SliderBlock />
                },
            }
        },
        fontFam:font
    }

    return (
        <>
            <ConfigParamsBlock {...propsConfigParams} />
        </>
    )
}
