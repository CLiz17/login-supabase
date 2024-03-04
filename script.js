const supabaseUrl = 'https://fgkxkvlpqmfaanxyiaps.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZna3hrdmxwcW1mYWFueHlpYXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0Mzg5ODcsImV4cCI6MjAyNTAxNDk4N30.pYat0HfvZp - xxDug1kw2KhaNnHZuZ_uhyedk0kDWVbQ';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

async function handleSignup(event) {
    event.preventDefault();

    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    try {
        const { user, session, error } = await supabaseClient.auth.signUp({
            email: userEmail,
            password: userPassword,
        });

        if (error) {
            console.error('Error signing up:', error.message);
            return;
        }

        console.log('User registered:', user);
        console.log('Session:', session);

    } catch (error) {
        console.error('Error signing up:', error.message);
    }
}

document.getElementById('signup-form').addEventListener('submit', handleSignup);