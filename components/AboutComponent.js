import React ,{Component} from 'react';
import {Text,FlatList,SafeAreaView} from 'react-native';
import {Card,ListItem} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import { baseURL } from '../shared/baseUrl';

const mapStateToProps= state =>{
    return {
        leaders:state.leaders
    }
}



class About extends Component{

    constructor(props){
        super(props);
        this.state={
            scrolldisable:false
        }
    }

    static navigationOptions={
        title:'About Us'
    };

    render(){

        const renderLeaders=({item,index})=>{
            return (
                <ListItem key={index} title={item.name} subtitle={item.description} hideChevron={true} leftAvatar={{source:{uri:baseURL+item.image}}} />
            );
        }

        return(
           <ScrollView>
            <SafeAreaView style={{flex: 1}}>
                 <Card featuredTitle="Our History" title="Our History"> 
                    <Text> 
                    Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                    
                    The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan </Text>
                 </Card>
               
                <Card title="corporate Leaders">
                    
                    <FlatList 
                        data={this.props.leaders.leaders}
                        renderItem={renderLeaders}
                        contentContainerStyle={{
                            flexGrow: 1,
                            }}
                        keyExtractor={item=>item.id.toString()}
                        />
                </Card> 
                
               
              

           

            </SafeAreaView>
            </ScrollView>

        );

    }
}

export default connect(mapStateToProps)(About);