/*
 * JasperReports - Free Java Reporting Library.
 * Copyright (C) 2001 - 2013 Jaspersoft Corporation. All rights reserved.
 * http://www.jaspersoft.com
 *
 * Unless you have purchased a commercial license agreement from Jaspersoft,
 * the following license terms apply:
 *
 * This program is part of JasperReports.
 *
 * JasperReports is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * JasperReports is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with JasperReports. If not, see <http://www.gnu.org/licenses/>.
 */
package net.sf.jasperreports.charts;

import net.sf.jasperreports.engine.JRChartDataset;


/**
 * This dataset accommodates one or more data series consisting of values associated with 
 * categories. It is used to render Bar, Bar 3D, Stacked Bar, Line, Area, and Stacked Area 
 * charts 
 * 
 * @author Teodor Danciu (teodord@users.sourceforge.net)
 * @version $Id: JRCategoryDataset.java 6995 2014-04-01 11:26:53Z shertage $
 */
public interface JRCategoryDataset extends JRChartDataset
{
	
	/**
	 * @return an array of {@link JRCategorySeries} objects representing the 
	 * series for category charts
	 * 
	 * @see JRCategorySeries
	 */
	public JRCategorySeries[] getSeries();

}
