import Button from './components/Button/Button'
import Input from './components/Input/Input'

function App() {
  return (
    <div style={{ padding: '2rem', display: 'grid', gap: '1rem' }}>
      <h1>Landing Page</h1>

      {/* Geçici test alanı — Input bileşeni */}
      <div style={{ display: 'grid', gap: '1rem', maxWidth: '320px' }}>
        <Input label="Ad Soyad" placeholder="Adınızı girin" />
        <Input label="E-posta" type="email" placeholder="ornek@mail.com" />
        <Input
          label="E-posta (hatalı örnek)"
          defaultValue="yanlis-mail"
          error="Geçerli bir e-posta adresi girin"
        />
      </div>

      {/* Geçici test alanı — Button bileşenini deniyoruz */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary">Test Sürüşü</Button>
        <Button variant="secondary">Keşfet</Button>
        <Button variant="outline">Detaylar</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button size="sm">Küçük</Button>
        <Button size="md">Orta</Button>
        <Button size="lg">Büyük</Button>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button disabled>Pasif</Button>
        <Button variant="primary" onClick={() => alert('Tıklandı!')}>
          Tıkla
        </Button>
      </div>
    </div>
  )
}

export default App
