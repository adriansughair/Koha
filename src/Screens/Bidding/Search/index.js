import React, {useState,useEffect} from 'react';
import {StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../../styles';
import Layout from '../../../components/layout/Layout';
import Loading from '../../../components/Loading'
import colors from '../../../styles/colors';
import I18n from '../../../I18n';
import {useDispatch , useSelector} from 'react-redux';
import SearchView from "./SearchBidding";
import {BidFilter} from '../../../providers/routes';
import {post} from '../../../providers/provider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { City } from '../../../actions/BidActions';


const height = Dimensions.get('window').height;

export default function SearchBiddingIndex({navigation,route}) {
    const dispatch = useDispatch();
    const [status, setStatus] = useState('loading');
    const getSort = useSelector(state => state.bid.Sort);
    const Price = useSelector(state => state.bid.Price);
    const loctions = useSelector(state => state.bid.Locations);
    const Age = useSelector(state => state.bid.Ages);
    
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [getSort]);

    useEffect(() => {
        getData();
    }, [loctions]);

    useEffect(() => {
    getData();
    }, [Price]);
    
    const handleResponse = (response, json) => {
    console.log("iM Rendirng After Select Ages");
        dispatch(City([...json.data.cites]));
        switch (response.status) {
            case 200:
                setData(json.data.data);
                setStatus('start');
                break;
                default:
                setStatus('loading');
        }
    }
    
    const getData = async () =>{
        
        const options = {route: BidFilter ,
            body : {
                lang:I18n.locale , 
                sort : getSort ,
                price : Price ,
                location : loctions ,
                Age : Age 
        }
    };
        
        const response = await post(options);
        await response.json().then(
            (json) => handleResponse(response, json),
            (err) => console.log('err : ', err),
            );
    }


    
    const Footer = () => {
        return  <View style={styles.footerContainer}>
       <TouchableOpacity style={styles.footeritem} 
            // onPress={() => setShow(true)}
            >
            <Icon
                name="sort-amount-desc"
                size={25}
                color={'#755734'}
                />
            <Text>Sort By</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footeritem} 
        // onPress={() => setShow2(true)}
        >
          <Icon
                name="filter"
                size={25}
                color={'#755734'}
                />
            <Text>Filter</Text>
        </TouchableOpacity>
        </View>
        }
        
        const renderTemplate = () => {
           
            switch (status) {
                case 'loading':
                    return <Loading color={colors.default} />;
                case 'start':
                    const props = {
                        handleSubmit: (data) => handleSubmit(data),
                        data:data,
                        navigation:navigation,
                    };
                    return <SearchView props={props}/>;
                
                // case 'success':
                //     const props2 = {show: true,navigation:navigation};
                //     return <ShowModal props={props2}/>}
            }
    
        }
        
    return (<Layout>
                {renderTemplate()}
                {/* {Footer()} */}
             </Layout>
           )
};

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 50,
        alignItems: 'flex-end',
    },
    footerIcon: {
        height: 25,
        width: 25,
    },
    footerAddIcon: {
        backgroundColor: colors.orange,
        padding: 5,
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footeritem:{
        flexDirection: 'row',
        width:'25%',
        justifyContent: 'space-around',
    }
});