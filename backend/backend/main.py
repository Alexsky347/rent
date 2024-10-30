from fastapi import FastAPI, Query
from typing import List, Optional
import yfinance as yf
import pandas as pd

app = FastAPI()

# Add some common stock lists
TECH_STOCKS = ["AAPL", "GOOGL", "MSFT", "META", "AMZN"]
FINANCE_STOCKS = ["JPM", "BAC", "GS", "MS", "WFC"]
SECTORS = {
    "Technology": TECH_STOCKS,
    "Finance": FINANCE_STOCKS,
    # Add more sectors as needed
}

@app.get("/api/stocks/list")
async def get_stock_list(
    sector: Optional[str] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    min_volume: Optional[int] = None
):
    stocks_list = []

    # Get base list of stocks based on sector
    base_stocks = SECTORS.get(sector, []) if sector else sum(SECTORS.values(), [])

    for symbol in base_stocks:
        try:
            stock = yf.Ticker(symbol)
            info = stock.info
            current_price = info.get('regularMarketPrice', 0)
            volume = info.get('regularMarketVolume', 0)

            # Apply filters
            if min_price and current_price < min_price:
                continue
            if max_price and current_price > max_price:
                continue
            if min_volume and volume < min_volume:
                continue

            stocks_list.append({
                'symbol': symbol,
                'name': info.get('shortName', ''),
                'price': current_price,
                'volume': volume,
                'sector': sector or info.get('sector', ''),
                'marketCap': info.get('marketCap', 0)
            })

        except Exception as e:
            continue

    return stocks_list

@app.get("/api/stocks/search")
async def search_stocks(
    query: str = Query(None),
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    sector: Optional[str] = None,
    sort_by: Optional[str] = "volume",  # price, volume, marketCap
    sort_order: Optional[str] = "desc"
):
    # Implementation for search functionality
    pass

# for cmd in toml file
# def start():
#     uvicorn.run(app, host="0.0.0.0", port=8000)
