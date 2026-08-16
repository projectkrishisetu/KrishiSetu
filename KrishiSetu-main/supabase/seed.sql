-- Seed initial APMC market benchmark rates and MSP reference prices
INSERT INTO public.market_prices (commodity, apmc_mandi, state, min_price, max_price, modal_price, msp_price, trend) VALUES
('Tomatoes (Grade A)', 'Vashi APMC', 'Maharashtra', 22.00, 28.00, 25.00, NULL, 'up'),
('Onions (Nashik Red)', 'Lasalgaon APMC', 'Maharashtra', 16.00, 21.00, 18.50, NULL, 'down'),
('Wheat (Sharbati)', 'Indore APMC', 'Madhya Pradesh', 24.00, 29.00, 27.00, 22.75, 'up'),
('Basmati Paddy', 'Karnal APMC', 'Haryana', 32.00, 38.00, 35.00, 21.83, 'flat'),
('Potatoes (Jyoti)', 'Hooghly APMC', 'West Bengal', 14.00, 18.00, 16.00, NULL, 'flat');
