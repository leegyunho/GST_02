import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css'

// Import your logo image
import mainpage_logo from '../signin_page/GST_logo.png';

const defaultTheme = createTheme();

const Signup = () => {
  const [user, setUser] = useState({
    id: '',
    password: '',
    nickname: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user.id,
        user_nick: user.nickname,
        user_phone: user.phoneNumber,
        user_pw: user.password
      })
    };

    try {
      const response = await fetch('http://localhost:5000/signup', requestOptions);

      if (response.ok) {
        const text = await response.text();
        alert(text);
        window.location.href = 'http://localhost:3000'; // 페이지 이동
      } else {
        const error = await response.json();
        alert(error.message); // 서버에서 보내는 오류 메시지를 보여줍니다.
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('서버와의 연결에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.'); // 네트워크 오류 메시지를 보여줍니다.
    }
  };


  return (
    <div id='signUp_main'>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              alignContent : 'center'
            }}
          >
            
            <Link href="/" >
            <img id= 'signUp_logo' src={mainpage_logo} alt="Logo"  />
            </Link>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="id"
                    label="아이디"
                    name="id"
                    value={user.id}
                    onChange={handleChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    label="패스워드"
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="nickname"
                    label="닉네임"
                    name="nickname"
                    value={user.nickname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phoneNumber"
                    label="핸드폰 번호"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleChange}
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                회원가입
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/SignIn" variant="body2">
                    로그인
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Signup;
