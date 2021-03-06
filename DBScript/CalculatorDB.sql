USE [Calculator]
GO
/****** Object:  Table [dbo].[OperationLog]    Script Date: 24/08/2020 16:49:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OperationLog](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[FirstValue] [float] NOT NULL,
	[SecondValue] [float] NOT NULL,
	[Operation] [varchar](50) NOT NULL,
	[UserUrl] [varchar](max) NULL,
	[TimeStamp] [datetime] NOT NULL,
 CONSTRAINT [PK_OperationLog] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
