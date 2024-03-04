const supabaseUrl = 'https://fgkxkvlpqmfaanxyiaps.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZna3hrdmxwcW1mYWFueHlpYXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0Mzg5ODcsImV4cCI6MjAyNTAxNDk4N30.pYat0HfvZp-xxDug1kw2KhaNnHZuZ_uhyedk0kDWVbQ'
const supabase = createClient(supabaseUrl, supabaseKey);

async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const { user, session, error } = await supabase.auth.signIn({
            email: username,
            password,
        });

        if (error) {
            console.error('Error logging in:', error.message);
            return;
        }

        console.log('User:', user);
        console.log('Session:', session);

    } catch (error) {
        console.error('Error logging in:', error.message);
    }
}

document.getElementById('login-form').addEventListener('submit', handleLogin);
