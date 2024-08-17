// Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyAGLywStbOa4MPfRALGsuXXeoxcM_MFclo",
        authDomain: "login-f1481.firebaseapp.com",
        projectId: "login-f1481",
        storageBucket: "login-f1481.appspot.com",
        messagingSenderId: "583633969028",
        appId: "1:583633969028:web:c1a193e69cd475381c47d1",
        measurementId: "G-KM52EETQ7L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Elements
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitPostButton = document.getElementById('submitPost');
const postsContainer = document.getElementById('posts');

// Submit a new post
submitPostButton.addEventListener('click', () => {
    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
        db.collection('posts').add({
            title: title,
            content: content,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            titleInput.value = '';
            contentInput.value = '';
            alert('Post submitted successfully!');
        }).catch(error => {
            console.error('Error adding post: ', error);
        });
    } else {
        alert('Please fill in both the title and content fields.');
    }
});

// Fetch and display posts
db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    postsContainer.innerHTML = '';
    snapshot.forEach(doc => {
        const post = doc.data();
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
});