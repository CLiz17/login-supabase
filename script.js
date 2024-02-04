const supabaseUrl = 'https://fgkxkvlpqmfaanxyiaps.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZna3hrdmxwcW1mYWFueHlpYXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0Mzg5ODcsImV4cCI6MjAyNTAxNDk4N30.pYat0HfvZp-xxDug1kw2KhaNnHZuZ_uhyedk0kDWVbQ';
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault(); 
    
    const formData = new FormData(event.target); 
    const username = formData.get('username');
    const password = formData.get('password');
    
    const { data, error } = await supabase
        .from('users') 
        .insert([{ username, password }]);
    
    if (error) {
        console.error('Error inserting data:', error.message);
    } else {
        console.alert('Data inserted successfully:', data);
    }
});
