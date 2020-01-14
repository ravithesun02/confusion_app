import React from 'react';
import {View ,Text} from 'react-native';
import {Card} from 'react-native-elements';

function RenderCard(props){
    const dish=props.dish;

    if(dish!=null)
    {
        return(
            <Card featuredTitle={dish.name} image={require('./images/buffet.png')}>
                <Text style={{margin:10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else
    {
        return (<View></View> );
    }
}
function DishDetail(props){
    return(
        <RenderCard dish={props.dish}/>
    );
}
export default DishDetail;