import React from 'react';
import { Card, Avatar, Skeleton } from 'antd';
import CardDescription from './components';
import { useState } from 'react';

const { Meta } = Card;

export interface CustomSkeletonProps {
    
}
 
const CustomSkeleton: React.FC<CustomSkeletonProps> = () => {
    
    const [loading, setLoading] = useState(false);
    
    return ( 
        <div>
            <Card
                hoverable
                style={{ width: 300, margin: '16px' }}
                cover={loading ? <Skeleton.Image style={{ width: 300, height: 200}} /> : <img alt="example" src="https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2018/10/london-england.jpg?resize=768%2C513&ssl=1" />}
            >
                <Meta 
                    description={
                    <CardDescription 
                        loading={loading} 
                    />
                }
                />
            </Card>
            
        </div>
     );
}
 
export default CustomSkeleton;