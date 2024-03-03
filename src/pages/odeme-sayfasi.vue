<template>
    <VRow>
        <VCol>
            <VRow style="margin-top: 20px;" v-for="(field, merchantId) in items " :key="merchantId">
                <VCard :title="'Satıcı:  ' + field.merchantName" width="800">
                    <VRow>
                        <VCol cols="12">
                            <VCard style="background-color: lightgreen;">

                                <h5 style="text-align: center;"> <v-icon style="text-align: center;" color="success"
                                        icon="mdi-check-circle" size="small"></v-icon>KARGO BEDAVA</h5>
                            </VCard>
                        </VCol>
                    </VRow>
                    <VRow v-for="(productField, ProductId) in field.ProductsBasket " :key="ProductId">
                        <VCol>

                            <VCard style="margin-top: 10px;" width="800">
                                <VRow>
                                    <VCol cols="2"><img width="70" :src="productField.ImgUrl" /></VCol>
                                    <VCol cols="4">
                                        <h4>{{ productField.ProductName }}</h4>
                                    </VCol>
                                    <VCol cols="2">
                                        <h4>{{ productField.ProductPrice }} TL</h4>
                                    </VCol>
                                    <VCol cols="4">
                                        <VRow>
                                            <VCol cols="1"><v-btn color="warning" style="height: 0px;" variant="text"
                                                    density="compact" icon="mdi-plus"></v-btn>
                                            </VCol>
                                            <VCol cols="1">
                                                <VTextField style="width: 11px; height: 10px;" variant="underlined"
                                                    v-model="productField.ProductPiece">
                                                </VTextField>
                                            </VCol>
                                            <VCol cols="1"><v-btn color="warning" style="height: 0px;" variant="text"
                                                    density="compact" icon="mdi-minus"></v-btn>
                                            </VCol>
                                            <VCol cols="3"><v-btn  style="height: 0px;" variant="text" color="error" density="compact"
                                                    icon="mdi-trash"></v-btn></VCol>
                                        </VRow>
                                    </VCol>
                                </VRow>
                            </VCard>
                        </VCol>
                    </VRow>
                </VCard>
            </VRow>
        </VCol>
        <VCol>
            <VRow style="padding-top: 40px; padding-left: 20px;">
                <VCol  style="background-color: white;">
                        <VRow>
                            <VCol style="display: flex;
        justify-content: center;
        align-items: center;"> 
                                <VBtn type="submit" append-icon="mdi-arrow-right" class="mx-1" color="warning">
                                    Sepeti Onayla
                                </VBtn>
                            </VCol>
                        </VRow>
                </VCol>
            </VRow>
            <VRow style="padding-top: 40px; padding-left: 20px;">
                <VCol style="background-color: white;">
                    <VRow>
                        <VCol>HESAP ÖZETİ</VCol>
                    </VRow>
                    <VRow>
                        <VCol>Ürünün Toplamı: </VCol>
                        <VCol>{{ sumProductPrice }} TL</VCol>
                    </VRow>
                    <VRow>
                        <VCol>Kupon İndirimi: </VCol>
                        <VCol> <a color="success">- 100 TL</a></VCol>
                    </VRow>
                    <VRow>
                        <VCol>Kargo Toplamı: </VCol>
                        <VCol> <strike style="color: rgb(141, 206, 141);">-39,9</strike></VCol>
                    </VRow>
                    <VRow>
                        <VCol>Toplam:</VCol>
                        <VCol>{{ sumProductPriceAfter }} TL</VCol>
                    </VRow>
                </VCol>
            </VRow>
            <VRow style="margin-top: 20px;">
                <VCol cols="1" offset="2">
                    <v-icon color="success" icon="mdi-percent" size="large"></v-icon>
                </VCol>
                <VCol cols="5">
                    <VTextField v-model="cuponCode" label="Kupon Kodu" />
                </VCol>
                <VCol>
                    <VBtn @click="cuponActive(cuponCode)" class="mx-1" variant="outlined" color="success">
                        Uygula
                    </VBtn>
                </VCol>
            </VRow>
        </VCol>
    </VRow>
</template>

<script lang="ts">
export default {
    mounted() {
        this.basketSum();
    },
    methods: {
        basketSum() {
            this.items.forEach(merchant => {
                merchant.ProductsBasket.forEach(product =>{
                   this.sumProductPrice =  this.sumProductPrice + (product.ProductPrice * product.ProductPiece)
                })
            });
            this.sumProductPriceAfter = this.sumProductPrice
        },
        cuponActive(cuponCode:any) {
            if(cuponCode == 'HelloVue')
            {
                this.sumProductPriceAfter = this.sumProductPrice - this.cuponPrice
            }
        }
    },
    data() {
        return {
            cuponCode: '',
            cuponPrice: 100,
            sumProductPriceAfter: 0,
            sumProductPrice:0,
            selected: [],
            items: [
                {
                    merchantId: '1',
                    merchantName: 'Okul Evi',
                    merchantPuan: 5,
                    ProductsBasket: [
                        {
                            ProductId: 'p1',
                            ProductName: 'Matematik DGS Soru Bankası',
                            ImgUrl: '../basketImage/dgsSoru.png',
                            ProductPiece: 1,
                            ProductPrice: 125
                        },
                        {
                            ProductId: 'p2',
                            ProductName: 'ALES Soru Bankası',
                            ImgUrl: '../basketImage/ales.png',
                            ProductPiece: 2,
                            ProductPrice: 220
                        },
                        {
                            ProductId: 'p3',
                            ProductName: 'Matematik KPSS ALES Soru Bankası',
                            ImgUrl: '../basketImage/kpssSoru.png',
                            ProductPiece: 1,
                            ProductPrice: 140
                        },
                    ]
                },
                {
                    merchantId: '2',
                    merchantName: 'Düş Kitap',
                    merchantPuan: 8,
                    ProductsBasket: [
                        {
                            ProductId: 'p4',
                            ProductName: 'TÜRKİYE İŞ BANKASI KÜLTÜR YAYINLARI',
                            ImgUrl: '../basketImage/kitapEser6adet.png',
                            ProductPiece: 1,
                            ProductPrice: 45
                        },
                        {
                            ProductId: 'p5',
                            ProductName: 'Kızıl Panda Yayınevi Dünya Klasikleri Seti 1 (6 KİTAP)',
                            ImgUrl: '../basketImage/eser.png',
                            ProductPiece: 1,
                            ProductPrice: 110
                        },
                        {
                            ProductId: 'p6',
                            ProductName: 'Kızıl Panda Yayınevi Sherlock Holmes Roman Seti',
                            ImgUrl: '../basketImage/roman.png',
                            ProductPiece: 1,
                            ProductPrice: 155
                        },
                        {
                            ProductId: 'p7',
                            ProductName: 'Dahiyen Sağlıklı Yaşam Günlük Planlayıcısı ',
                            ImgUrl: '../basketImage/eser.png',
                            ProductPiece: 2,
                            ProductPrice: 44.5
                        },
                    ]
                }
            ],
        }
    },
}
</script>