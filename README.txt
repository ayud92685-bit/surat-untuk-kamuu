# Website Surat untuk Kamu 💌

## Menjalankan di laptop (Windows)

1. Install Python jika belum ada. Saat instalasi, centang **Add Python to PATH**.
2. Ekstrak folder `surat_untuk_kamu.zip`.
3. Buka folder `surat_untuk_kamu` di VS Code.
4. Buka terminal VS Code: **Terminal > New Terminal**.
5. Jalankan:

   ```bash
   python -m venv venv
   ```

6. Aktifkan lingkungan virtual:

   PowerShell:
   ```powershell
   .\venv\Scripts\Activate.ps1
   ```

   Jika PowerShell menolak aktivasi, coba Command Prompt:
   ```bat
   venv\Scripts\activate.bat
   ```

7. Install kebutuhan:
   ```bash
   python -m pip install -r requirements.txt
   ```
8. Jalankan:
   ```bash
   python app.py
   ```
9. Buka browser ke `http://127.0.0.1:5000`.

## Membuat website bisa dibuka publik

Salah satu cara yang mudah adalah memakai Render:

1. Buat akun di GitHub dan Render.
2. Upload/push isi folder ini ke sebuah repository GitHub.
3. Di Render, pilih **New > Web Service**, lalu hubungkan repository tersebut.
4. Jika Render tidak membaca `render.yaml` otomatis, isi:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
5. Pilih **Deploy** dan tunggu sampai selesai. Render akan memberi alamat publik HTTPS yang bisa dikirim ke penerima.

Catatan: akun/layanan hosting dapat memiliki batas penggunaan atau ketentuan yang berubah. Link publik baru tersedia setelah berhasil di-deploy.

## Mengubah isi surat

Buka `static/script.js`, lalu ubah tulisan di dalam daftar `messages`.
Untuk mengubah judul halaman, edit `<title>` dan `<h1>` pada `templates/index.html`.
