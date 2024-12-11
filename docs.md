### **Set Up**

1. Clone the repository:

   ```bash
   git clone https://github.com/codeantik/uniblox-assignment.git
   cd uniblox-assignment/backend
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

---

## **APIS**

### **Cart API**

#### **1. Add Items to Cart**

**Endpoint**: `POST /v1/cart`  
**Request Body**:

```json
{
  "itemId": 1,
  "quantity": 1,
  "price": 500
}
```

**Response**:

```json
{
  "itemId": 1,
  "quantity": 1,
  "price": 500
}
```

### **Checkout API**

#### **1. Checkout the oder (for every nth discount order): 3 in our case**

**Endpoint**: `POST /v1/checkout`  
**Request Body**:

```json
{
  "discountCode": "UNIBLOX_DISCOUNT_X56FJ8"
}
```

**Response**:

```json
{
  "orderId": 1,
  "totalAmount": 100,
  "discountAmount": 10,
}
```

---

### **Admin API**

#### **1. Generate Discount Code**

**Endpoint**: `POST /v1/admin/discount-code`  
**Response**:

```json
{
  "discountCode": "UNIBLOX_DISCOUNT_X56FJ8"
}
```

#### **2. Get Store Stats**

**Endpoint**: `GET /v1/admin/store-stats`  
**Response**:

```json
{
  "totalItemsPurchased": 15,
  "totalPurchaseAmount": 20000,
  "discountCodes": ["UNIBLOX_DISCOUNT_L44HC0", "UNIBLOX_DISCOUNT_X56FJ8"],
  "totalDiscountGiven": 1200
}
```
