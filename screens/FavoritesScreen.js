import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';


const FavoritesScreen = props => {
    // const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    const availableMeals = useSelector(state => state.meals.favoriteMeals);

    if(availableMeals.length === 0 || !availableMeals) {
        return(
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        )
    }

    return <MealList listData={availableMeals} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;