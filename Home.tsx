import React from 'react';
import { Text as T, View as V, StyleSheet as SS } from 'react-native';

const Home = () => {
        return (
                <V style={styles.mainHome}>

                        <V style={[styles.view1, styles.vieww]}>
                                <T style={styles.headingTag}>
                                        FAULT
                                </T>

                                <T style={{color: 'black'}}>
                                        PC keyboard malfunctioning
                                </T>
                                
                        </V>
                        <V style={[styles.view2, styles.vieww]}>
                                <T style={styles.headingTag}>
                                        SOLUTION
                                </T>

                                <T style={{color: 'black'}}>
                                "Open Notepad to figure out the particular key that is malfunctioning.",
                                "2.	If the malfunctioning key is identified. Shutdown and dust key with a soft brush or a soft fabric ",
                                "3.	Dust the entire keyboard in case a particular key is not identified",
                                "4.	A replacement is advised if the problem continues."
                                </T>

                        </V>
                        <V style={[styles.view3, styles.vieww]}>
                                <T style={styles.headingTag}>
                                        NOTE
                                </T>

                                <T style={{color: 'black'}}>
                                If any of the above listed solution refuses to correct the problem, you need to visit an expert.
                                </T>

                        </V>


                </V>
        )
}

const styles = SS.create({
        mainHome: {
                flex: 1,
                display: "flex",
                flexDirection: "row"
        },
        vieww: {
                margin: 5,
                padding: 15,
                width: 400
        },
        headingTag: {
                color: "blue",
                fontSize: 25,
                paddingVertical: 30
        },
        view1: {
                
        },
        view2: {
        },
        view3: {

        }
})




export default Home;