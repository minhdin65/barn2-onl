# Auto Deploy Cursor → GitHub → CyberPanel

## Quy trình
1. Bạn code trong **Cursor**
2. **Push** lên GitHub (`git push`)
3. **GitHub Actions** tự động build & deploy qua **FTP** lên **CyberPanel**

---

## Bước 1: Thêm Secrets vào GitHub

1. Vào repo: https://github.com/minhdin65/barn2-onl
2. **Settings** → **Secrets and variables** → **Actions**
3. **New repository secret** → Thêm các biến sau:

| Secret Name      | Giá trị (lấy từ CyberPanel)                    |
|------------------|------------------------------------------------|
| `FTP_SERVER`     | IP server hoặc domain (vd: `barn2.vercel.app`)        |
| `FTP_USERNAME`   | Username FTP/SFTP                              |
| `FTP_PASSWORD`   | Password FTP/SFTP                              |
| `FTP_REMOTE_PATH`| Đường dẫn thư mục web (vd: `/home/username/barn2.vercel.app/public_html`) |
| `FTP_PORT`       | (Tùy chọn) Port FTP, mặc định `21`             |

### Lấy thông tin FTP từ CyberPanel
- **Websites** → **Manage** → **FTP Accounts**  
  hoặc **Create FTP Account**

---

## Bước 2: Push code để kích hoạt deploy

```bash
git add .
git commit -m "Update"
git push origin main
```

Sau mỗi lần push, GitHub Actions sẽ build và deploy lên CyberPanel.

---

## Kiểm tra deploy
- **GitHub** → tab **Actions** → xem trạng thái workflow
- Mở website để kiểm tra
