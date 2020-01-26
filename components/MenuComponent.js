import React ,{Component} from 'react';
import {FlatList} from 'react-native';
import {Tile} from 'react-native-elements';
import { baseURL } from '../shared/baseUrl';
import {connect} from 'react-redux';

const mapStateToProps=state=>{
    return{
        dishes:state.dishes
    }
}

class Menu extends Component{

  

    static navigationOptions={
        title:'Menu'
    };
   
render(){

    const {navigate}=this.props.navigation;

    const renderMenuItem=({item,index})=>{
        return(
            <Tile
                key={index}
                title={item.title}
                caption={item.description}
                featured
                onPress={()=>navigate('DishDetail',{dishId: item.id})}
                imageSrc={{uri:baseURL+item.image}} />
        );
    }
    return(
        <FlatList
            data={this.props.dishes.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item=>item.id.toString()}/>
    );
}

}

export default connect(mapStateToProps)(Menu);