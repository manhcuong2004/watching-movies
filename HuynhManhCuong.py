def caesar_cipher(plaintext, k):
    ciphertext = ''
    for char in plaintext:
        if char.isupper():
            ciphertext += chr((ord(char) - 65 + k) % 26 + 65)
        elif char.islower():
            ciphertext += chr((ord(char) - 97 + k) % 26 + 97)
    return ciphertext

# Thông số đầu vào
k = 5
plaintext = 'HuynhManhCuong'

# Gọi hàm mã hóa và in kết quả
ciphertext = caesar_cipher(plaintext, k)
print('Ciphertext:', ciphertext)
