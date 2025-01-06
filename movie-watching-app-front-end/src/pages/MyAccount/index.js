import styles from './styles.module.css';
import Header from '../../components/components/Header'
import Nav from '../../components/components/Nav';
function MyAccount() {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        // Add your form submission logic here
    };

    return (
        <div>
            <Header />
            <Nav /> 
            <div className={styles.container}>
                <div className={styles.MainContainer}>
                    <div className={styles.tabs}>
                        <span className={`${styles.tab} ${styles.activeTab}`}>Account details</span>
                        <span className={styles.tab}>Payment Info</span>
                    </div>
                    <div className={styles.formContainer}>
                        <img src="https://streamo.vuejstemplate.com/images/product/horror-5.jpg" className={styles.profileImage}/>
                        <div className={styles.detailsSection}>
                            <h2 className={styles.sectionTitle}>General Information</h2>
                            <p className={styles.sectionDescription}>
                                By letting us know your name, we can make our support experience much more personal.
                            </p>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.inputRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" placeholder="First Name" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" placeholder="Last Name" required />
                                    </div>
                                </div>
                                <div className={styles.inputRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="displayName">Display Name</label>
                                        <input type="text" id="displayName" defaultValue="Brent Robinson" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" defaultValue="info@example.com" required />
                                    </div>
                                </div>
                                <h2 className={styles.sectionTitle}>Password Change</h2>
                                <div className={styles.inputRow}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="currentPassword">Current Password</label>
                                        <input type="password" id="currentPassword" placeholder="Current Password" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="newPassword">New Password</label>
                                        <input type="password" id="newPassword" placeholder="New Password" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type="password" id="confirmPassword" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <button type="submit" className={styles.saveButton}>
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
