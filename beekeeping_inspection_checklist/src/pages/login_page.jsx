import React from 'react'




const Login_page = () => {

const styles = {
    desktop: {
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center', // Center items vertically
      width: '100%',
      minHeight: '100vh', // Make the page at least the height of the viewport
   
    },
    div: {
      backgroundColor: '#ffffff',
      border: '1px none',
      height: '100%',
      position: 'relative',
      maxWidth: '1440px', // Set maximum width for content
      width: '100%',
      padding: '0 20px', // Add horizontal padding for responsiveness
   
    },
    textWrapper: {
      color: '#000000',
      fontFamily: 'Inter-SemiBold, Helvetica',
      fontSize: '96px',
      fontWeight: 600,
      letterSpacing: '0',
      textAlign: 'center', // Center text horizontally
      margin: '0', // Remove default margins
    },
    textWrapper2: {
      color: '#000000',
      fontFamily: 'Inter-SemiBold, Helvetica',
      fontSize: '15px',
      fontWeight: 600,
      left: '209px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '34px',
      width: '25px',
    },
    textWrapper3: {
      color: '#000000',
      fontFamily: 'Inter-SemiBold, Helvetica',
      fontSize: 'px',
      fontWeight: 600,
      left: '209px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '721px',
      width: '205px',
    },
    line: {
      height: '1px',
      left: '209px',
      objectFit: 'cover',
      position: 'absolute',
      top: '486px',
      width: '985px',
      bordertop: '5px solid black'
    },
    img: {
      height: '2px',
      left: '209px',
      objectFit: 'cover',
      position: 'absolute',
      top: '863px',
      width: '997px',
    },
    overlapGroup: {
      backgroundColor: '#ffe81a',
      borderRadius: '50px',
      height: '127px',
      left: '401px',
      position: 'absolute',
      top: '1049px',
      width: '639px',
    },
    textWrapper4: {
      color: '#000000',
      fontFamily: 'Inter-SemiBold, Helvetica',
      fontSize: '40px',
      fontWeight: 600,
      left: '255px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '37px',
      width: '275px',
    },
    textWrapper5: {
      color: '#000000',
      fontFamily: 'Inter-SemiBold, Helvetica',
      fontSize: '32px',
      fontWeight: 600,
      left: '931px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '904px',
      width: '331px',
    },
    textWrapper6: {
      color: '#000000',
      fontFamily: 'Inter-SemiBold, Helvetica',
      fontSize: '32px',
      fontWeight: 600,
      left: '588px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '1232px',
      width: '264px',
    },
    googleLogoIcon: {
      height: '153px',
      left: '635px',
      objectFit: 'cover',
      position: 'absolute',
      top: '1348px',
      width: '158px',
    },
    textWrapper7: {
      color: '#bbbbbb',
      fontFamily: 'Inter-SemiBold, Helvetica',
      fontSize: '40px',
      fontWeight: 600,
      left: '531px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '413px',
      whiteSpace: 'nowrap',
      width: '379px',
    },
    textWrapper8: {
      color: '#bbbbbb',
      fontFamily: 'Inter-SemiBold, Helvetica',
      fontSize: '40px',
      fontWeight: 600,
      left: '578px',
      letterSpacing: '0',
      lineHeight: 'normal',
      position: 'absolute',
      top: '798px',
      whiteSpace: 'nowrap',
      width: '346px',
    },
  };

  return (
    <div style={styles.desktop}>
      <div style={styles.div}>
        <h1 style={styles.textWrapper}>Login</h1>
        <div style={styles.textWrapper2}>email</div>
        <div style={styles.textWrapper3}>password</div>
        <img style={styles.line} alt="Line" src="line-1.svg" />
        <img style={styles.img} alt="Line" src="line-2.svg" />
        <div style={styles.overlapGroup}>
          <div style={styles.textWrapper4}>Sign Up</div>
        </div>
        <div style={styles.textWrapper5}>Forgot Password</div>
        <div style={styles.textWrapper6}>or Sign Up using</div>
        <img
          style={styles.googleLogoIcon}
          alt="Google logo icon png"
          src="google-logo-icon-png-transparent-background-osteopathy-16-1.png"
        />
        <div style={styles.textWrapper7}>john@gmail.com</div>
        <div style={styles.textWrapper8}>password</div>
      </div>
    </div>
  )
}

export default Login_page