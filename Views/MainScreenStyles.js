module.exports = {
    main_screen: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        height: '95%',
        alignItems: 'center',
    },

    // Display results
    main_screen__display: {
        elevation: 10,
        width: '95%',
        // height: '25%',
        backgroundColor: 'white',
        borderRadius: 10,
        display: 'flex',

        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        marginBottom: 10,
        padding: 10,
    },
    main_screen__display_text: {
        fontSize: 50,
        textAlign: 'right',
    },
    // ////////////////////////////////////////////////////////////////


    main_screen__keypad: {
        width: '100%',
        height: '70%',
        // backgroundColor: '#FF5757',
        display: 'flex',
        // justifyContent: 'center',
    },
    main_screen__keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    btn_outer: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_button: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 30,
    },


    btn1_outer: {
        width: 80,
        height: 80,
        backgroundColor: '#FF5757',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1_button: {
        backgroundColor: '#FF5757',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },


    btn2_outer: {
        width: 80,
        height: 80,

        backgroundColor: 'green',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg2_button: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom:10,
        marginTop:5,
        textAlign: 'center'
    }
}