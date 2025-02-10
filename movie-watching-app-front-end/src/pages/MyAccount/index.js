import styles from "./styles.module.css";
import Nav from "../../components/components/Nav";
function MyAccount() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Nav name={"my account"} />
      <div className={styles.container}>
        <div className={styles.MainContainer}>
          <div className={styles.tabs}>
            <span className={`${styles.tab} ${styles.activeTab}`}>
              Account details
            </span>
            <span className={styles.tab}>Payment Info</span>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.profileImage}>
              <img
                src="https://streamo.vuejstemplate.com/images/product/horror-5.jpg"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.detailsSection}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.general}>
                  <div className={styles.title}>
                    <h2 className={styles.sectionTitle}>General Information</h2>
                    <p className={styles.sectionDescription}>
                      By letting us know your name, we can make our support
                      experience much more personal.
                    </p>
                  </div>
                  <div className={styles.input_box}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" required />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="displayName">Display Name</label>
                      <input
                        type="text"
                        id="displayName"
                        defaultValue="Brent Robinson"
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        defaultValue="info@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.password_change}>
                  <h2 className={styles.sectionTitle}>Password Change</h2>
                  <div className={styles.input_box}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="currentPassword">Current Password</label>
                      <input type="password" id="currentPassword" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="newPassword">New Password</label>
                      <input type="password" id="newPassword" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input type="password" id="confirmPassword" />
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" className={styles.saveButton}>
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
