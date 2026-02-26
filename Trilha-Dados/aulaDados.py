import kagglehub
import pandas as pd

# Download latest version
path = kagglehub.dataset_download("olistbr/brazilian-ecommerce")

#print("Path to dataset files:", path)

# PERGUNTAS QUE VAMOS RESPONDER

df_customers = pd.read_csv("C:/Users/lugul/Desktop/SCTEC_site/Trilha-Dados/kaggle/olist_customers_dataset.csv", dtype={"customer_zip_code_prefix": str})


df_customers.info()
df_customers.describe()
print(df_customers.head())

df_orders = pd.read_csv("C:/Users/lugul/Desktop/SCTEC_site/Trilha-Dados/kaggle/olist_orders_dataset.csv")
df_orders.info()
print(df_orders["order_status"].values)

df_reviews = pd.read_csv("C:/Users/lugul/Desktop/SCTEC_site/Trilha-Dados/kaggle/olist_order_reviews_dataset.csv")
df_reviews.info()
print(df_reviews.describe())

