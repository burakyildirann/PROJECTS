import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const categories = [
  { id: 1, name: "Elektronik", image: "https://picsum.photos/400/300?101" },
  { id: 2, name: "Moda", image: "https://picsum.photos/400/300?102" },
  { id: 3, name: "Ev & Yaşam", image: "https://picsum.photos/400/300?103" },
  { id: 4, name: "Aksesuar", image: "https://picsum.photos/400/300?104" },
];

const products = [
  { id: 1, title: "Kablosuz Kulaklık", price: "₺1.299", image: "https://picsum.photos/400/400?201" },
  { id: 2, title: "Akıllı Saat", price: "₺2.499", image: "https://picsum.photos/400/400?202" },
  { id: 3, title: "Laptop", price: "₺15.999", image: "https://picsum.photos/400/400?203" },
  { id: 4, title: "Telefon", price: "₺9.999", image: "https://picsum.photos/400/400?204" },
  { id: 5, title: "Bluetooth Hoparlör", price: "₺899", image: "https://picsum.photos/400/400?205" },
  { id: 6, title: "Oyuncu Mouse", price: "₺599", image: "https://picsum.photos/400/400?206" },
  { id: 7, title: "Tablet", price: "₺6.499", image: "https://picsum.photos/400/400?207" },
  { id: 8, title: "Kamera", price: "₺12.750", image: "https://picsum.photos/400/400?208" },
];

function Home() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#f5f5f5", overflowX: "hidden" }}>

      {/* HERO */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 320, md: 450 },
          background: "linear-gradient(135deg, #05c31e 0%, #0f2027 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          className="animated-title"
        >
          Büyük Sezon İndirimi
        </Typography>

        <Typography
          variant="h6"
          className="animated-subtitle"
          sx={{ mt: 3 }}
        >
          %50'ye varan fırsatlar seni bekliyor
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "white",
            color: "#05c31e",
            fontWeight: "bold",
            px: 5,
            py: 1.2,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#e0e0e0",
              transform: "scale(1.05)",
            },
          }}
        >
          Alışverişe Başla
        </Button>
      </Box>

      {/* CATEGORIES */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
        <Typography variant="h5" fontWeight="bold" mb={4}>
          Kategoriler
        </Typography>

        <Grid container spacing={4}>
          {categories.map((cat) => (
            <Grid item xs={6} md={3} key={cat.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={cat.image}
                  alt={cat.name}
                />
                <CardContent>
                  <Typography align="center" fontWeight="bold">
                    {cat.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* PRODUCTS */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
        <Typography variant="h5" fontWeight="bold" mb={4}>
          Çok Satanlar
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={6} sm={4} md={3} key={product.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={product.image}
                  alt={product.title}
                />

                <CardContent>
                  <Typography fontWeight="bold">
                    {product.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#05c31e",
                      fontWeight: "bold",
                      mt: 1,
                    }}
                  >
                    {product.price}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#05c31e",
                      "&:hover": {
                        backgroundColor: "#049a18",
                      },
                    }}
                  >
                    Sepete Ekle
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* KAMPANYA STRIP */}
      <Box
        sx={{
          backgroundColor: "#05c31e",
          color: "white",
          textAlign: "center",
          py: 4,
          mt: 6,
        }}
      >
        <Typography variant="h6">
          🚚 500₺ üzeri alışverişlerde ücretsiz kargo!
        </Typography>
      </Box>

      {/* ANIMATIONS */}
      <style>
        {`
          .animated-title {
            background: linear-gradient(90deg, #ffffff, #05c31e, #ffffff);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: slideUp 1s ease forwards,
                       shimmer 3s linear infinite;
            opacity: 0;
          }

          .animated-subtitle {
            animation: fadeIn 2s ease forwards;
            opacity: 0;
            animation-delay: 0.5s;
          }

          @keyframes slideUp {
            from {
              transform: translateY(40px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>

    </Box>
  );
}

export default Home;