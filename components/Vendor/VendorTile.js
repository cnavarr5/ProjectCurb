import * as React from 'react'
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper'

export default function VendorTile({ props }) {
    const [name, setName] = React.useState(props.name)
    const [src, setSrc] = React.useState(props.image)
    const [desc, setDesc] = React.useState(props.description)
    const [pageInfo, setPageInfo] = React.useState(props.page)
    const [nav, setNav] = React.useState(props.navigation)
    
    return (
        <Card style={styles.vendor} elevation={1} onPress={() => {
            console.log('navigate to store front for: ' + name)
            console.log(pageInfo)
            nav.navigate('Store', {pageInfo: pageInfo})
        }}>
            <Card.Cover source={{ uri: src, width: 100, height: 100 }} />
            <Card.Content>
                <Title>{name}</Title>
                <Paragraph>{desc}</Paragraph>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    vendor: {
      borderWidth: 1,
      backgroundColor: '#fff',
      width: '50%',
      marginVertical: 10      
    },
  });
  