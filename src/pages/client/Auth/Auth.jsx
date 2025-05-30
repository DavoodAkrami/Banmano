import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Container,
    List,
    ListItem,
    ListItemText,
    Paper,
    Tab,
    Tabs,
    TextField,
    Typography
} from '@mui/material';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import links from '../../../routes/links';
import { UserContext } from '../../../context/UsersContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState('idle');
    const [loginData, setLoginData] = useState(null);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    async function handleError(error) {
        console.error('ورود ناموفق:', error);
        setSuccessful('error');
        setLoginData(null);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log(response);

            if (response.status === 200) {
                console.log('ورود موفقیت‌آمیز:', data);
                setSuccessful('success');
                setLoginData(data);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                setUser(data.user);
                navigate(links.client.home);
            } else {
                console.log('ورود ناموفق:', data);
                setSuccessful('error');
                setLoginData(null);
            }
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box sx={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                ورود
            </Typography>
            <Box component="form" onSubmit={handleLogin} noValidate>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="آدرس ایمیل"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="رمز عبور"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={loading}
                    color="primary"
                >
                    {loading ? <CircularProgress size={24} /> : 'ورود'}
                </Button>
                {successful === 'success' && <Alert severity="success">ورود موفقیت‌آمیز</Alert>}
                {successful === 'error' && <Alert severity="error">ورود ناموفق</Alert>}
            </Box>
        </Box>
    );
};

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState('idle');
    const [signUpData, setSignUpData] = useState(null);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    async function handleError(error) {
        console.error('ورود ناموفق:', error);
        setSuccessful('error');
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            setSignUpData(data);
            console.log(response);

            if (response.status === 201) {
                console.log('ثبت‌نام موفقیت‌آمیز:', data);
                setSuccessful('success');
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                setUser(data.user);
                navigate(links.client.home);
            } else {
                console.log('ثبت‌نام ناموفق:', data);
                setSuccessful('error');
            }
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }

    return (
<Box sx={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        ثبت‌نام
      </Typography>
      <Box component="form" onSubmit={handleSignUp} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="نام"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="آدرس ایمیل"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="رمز عبور"
          type="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
          color="primary"
        >
          {loading ? <CircularProgress size={24} /> : 'ثبت‌نام'}
        </Button>
        {successful === 'success' && <Alert severity="success">ثبت‌نام موفقیت‌آمیز</Alert>}
        {successful === 'error' && <Alert severity="error">ثبت‌نام ناموفق</Alert>}
      </Box>
    </Box>
    )
}

const Auth = () => {
    const [tabValue, setTabValue] = useState(0);
    
    const handleTabChange = (event, newValue) => {
      setTabValue(newValue);
    };
    
    return (
        <Container component="main" maxWidth="sm">
          <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              variant="fullWidth" 
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="ورود" />
              <Tab label="ثبت‌نام" />
            </Tabs>
            
            <Box sx={{ mt: 2 }}>
              {tabValue === 0 ? <Login /> : <SignUp />}
            </Box>
          </Paper>
        </Container>
    )
}

export default Auth;
