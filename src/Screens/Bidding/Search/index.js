import React, {useState,useEffect} from 'react';
import {StyleSheet,TouchableOpacity, View, Text, TextInput,ScrollView,ImageBackground,Dimensions,Image,Modal} from 'react-native';
import {Presets} from '../../../styles';
import Layout from '../../../components/layout/Layout';
import Loading from '../../../components/Loading'
import colors from '../../../styles/colors';
import I18n from '../../../I18n';
import {useDispatch} from 'react-redux';
import SearchView from "./SearchBidding";
import {BidGet} from '../../../providers/routes';
import {get} from '../../../providers/provider';
import Icon from 'react-native-vector-icons/FontAwesome';

const height = Dimensions.get('window').height;

export default function SearchBiddingIndex({navigation,route}) {
    const dispatch = useDispatch();
    const [status, setStatus] = useState('loading');
  
    
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    
    const handleResponse = (response, json) => {
        // console.log(json.data);
        switch (response.status) {
            case 200:
                setData(json.data);
                setStatus('start');
                break;
                default:
                setStatus('loading');
        }
    }
    
    const getData = async () =>{
        
        const options = {route: BidGet};
        
        const response = await get(options);
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