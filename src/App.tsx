import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Card from './components/Card/Card'

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

      {/* Geçici test alanı — Card bileşeni (composition: içine ne koyarsak o) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          maxWidth: '600px',
        }}
      >
        <Card>
          <h3>1.5 Turbo Motor</h3>
          <p>182 beygir güçle keyifli ve verimli sürüş.</p>
        </Card>

        <Card featured>
          <h3>Sport Paketi</h3>
          <p>En popüler donanım — spor jant, deri döşeme.</p>
          <Button variant="primary" size="sm">
            Seç
          </Button>
        </Card>
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
